function getHtmlDocsSidebar() {
   return [
    {
        text:'基础',
        collapsible: true,
        children:[
            {
                text:'HTML 介绍',
                link:'/html-docs/introduce'
            }
        ],

    }
   ] 
}

export const sidebar = {
    '/html-docs/':getHtmlDocsSidebar()
}