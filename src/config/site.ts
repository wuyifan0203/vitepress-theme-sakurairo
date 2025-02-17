import { SiteConfig } from "../types";

export const defaultSiteConfig: SiteConfig = {
    background: {
        src: () => '',
        color:'#ffffff'
      },
      font: {
        src: () => '',
        family: () => '',
        size: '12px',
        weight: '400',
      },
      board: {
        showIcon: false,
        titleAlign: "left" ,
      },
      logo: '',
      avatar: '',
      author: '',
      description: '',
      sponsor:[],
      waline: {
        enable: false,
        serverURL: '',
      },
      onLoadImage: '',
      license:{
        copyright:'',
        record: '',
      }
};
