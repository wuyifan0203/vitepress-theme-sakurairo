import { defineStore, acceptHMRUpdate } from "pinia";
import { useSiteConfig, useThemeConfig } from "../composables/useConfig";
import { data } from "../posts.data";
import { withBase } from "vitepress";
import { getCommentsCount, getPageViews } from "../api";

const useStore = defineStore("App", {
  state: () => {
    return {
      theme: useThemeConfig(),
      site: useSiteConfig(),
      posts: data,
    };
  },
  actions: {
    async getTotalPageViews(serverURL: string) {
      const data = this.posts;
      const urls: string[] = [];
      const index: number[] = [];
      for (let j = 0, k = data.length; j < k; j++) {
        const current = data[j];
        if (current.layout === "page") {
          urls.push(withBase(current.url));
          index.push(j);
        }
      }

      try {
        const pageViewsRes = (await getPageViews(serverURL, urls)) as Array<{
          time: number;
        }>;
        const commentsRes = await getCommentsCount(serverURL, urls);

        pageViewsRes.forEach((info: { time: number }, i) => {
            data[index[i]]["pageViews"] = info.time;
            data[index[i]]["commentsCount"] = commentsRes[i];
        });
      } catch (error) {
        console.log(error, "获取total文章评论失败");
      } finally {
        console.log("getTotalPageViews", data);
      }
    },
  },
});

export const store = useStore();

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
