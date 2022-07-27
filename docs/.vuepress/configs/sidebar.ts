function getHtmlDocsSidebar() {
   return [
    {
        text:'基础',
        collapsible: true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children:[
            {
                text:'HTML 介绍',
                link:'/html-docs/introduce'
            }
        ],

    }
   ] 
}

function getComponentSidebar() {
    return [
        {
            text:'组件',
            collapsible: true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children:[
                {
                    text:'button test',
                    link:'/component/button'
                }
            ],
    
        },

       ] 
}

export const sidebar = {
    '/html-docs/':getHtmlDocsSidebar(),
    '/component/':getComponentSidebar(),
}