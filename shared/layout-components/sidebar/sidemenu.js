export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            { path: `/components/dashboard/dashboard`, icon: 'fe fe-home', type: 'link', active: false, selected: false, title: 'Dashboard' },
        ]
    },
    {
        menutitle: "UI KIT",

        Items: [

            {
                title: 'Apps', icon: "fe fe-slack", type: 'sub', Name:"",Names:"", active: false, selected: false, children: [

                    { path: `/components/apps/cards-design`, type: 'link', active: false, selected: false, title: 'Cards-design' },
                    { path: `/components/apps/chat`, type: 'link', active: false, selected: false, title: 'Chat' },
                    { path: `/components/apps/charts`, type: 'link', active: false, selected: false, title: 'Charts' },
                    { path: `/components/apps/content-scrollbar`, type: 'link', active: false, selected: false, title: 'Content-Scrollbar' },
                    { path: `/components/apps/counters`, type: 'link', active: false, selected: false, title: 'Counters' },
                    { path: `/components/apps/crypto-currencies`, type: 'link', active: false, selected: false, title: 'Crypto-Currencies' },
                    { path: `/components/apps/default-calender`, type: 'link', active: false, selected: false, title: 'Default-Calender' },
                    { path: `/components/apps/footers`, type: 'link', active: false, selected: false, title: 'Footers' },
                    { path: `/components/apps/full-calender`, type: 'link', active: false, selected: false, title: 'Full-Calender' },
                    { path: `/components/apps/loaders`, type: 'link', active: false, selected: false, title: 'Loaders' },
                    { path: `/components/apps/notifications`, type: 'link', active: false, selected: false, title: 'Notifications' },
                    { path: `/components/apps/range-slider`, type: 'link', active: false, selected: false, title: 'Range-slider' },
                    { path: `/components/apps/rating`, type: 'link', active: false, selected: false, title: 'Rating' },
                    { path: `/components/apps/search`, type: 'link', active: false, selected: false, title: 'Search' },
                    { path: `/components/apps/sweet-alerts`, type: 'link', active: false, selected: false, title: 'Sweet-alerts' },
                    { path: `/components/apps/timeline`, type: 'link', active: false, selected: false, title: 'Timeline' },
                    { path: `/components/apps/treeview`, type: 'link', active: false, selected: false, title: 'TreeView' },
                    { path: `/components/apps/user-list`, type: 'link', active: false, selected: false, title: 'User-list' },
                    { path: `/components/apps/widgets`, type: 'link', active: false, selected: false, title: 'Widgets' }

                ]
            },
            {

                title: 'Bootstrap', icon: "fe fe-package", type: 'sub', active: false, selected: false, Names:"mega-slide-menu", Name:"mega-menu", children: [

                    { path: `/components/bootstrap/accordians`, type: 'link', active: false, selected: false, title: 'Accordians' },
                    { path: `/components/bootstrap/alerts`, type: 'link', active: false, selected: false, title: 'Alerts' },
                    { path: `/components/bootstrap/avatar-radius`, type: 'link', active: false, selected: false, title: 'Avatar-Radius' },
                    { path: `/components/bootstrap/avatar-square`, type: 'link', active: false, selected: false, title: 'Avatar-Square' },
                    { path: `/components/bootstrap/avatar-rounded`, type: 'link', active: false, selected: false, title: 'Avatar-Rounded' },
                    { path: `/components/bootstrap/badgespills`, type: 'link', active: false, selected: false, title: 'BadgesPills' },
                    { path: `/components/bootstrap/breadcrumbs`, type: 'link', active: false, selected: false, title: 'Breadcrumbs' },
                    { path: `/components/bootstrap/buttons`, type: 'link', active: false, selected: false, title: 'Buttons' },
                    { path: `/components/bootstrap/carousels`, type: 'link', active: false, selected: false, title: 'Carousels' },
                    { path: `/components/bootstrap/colors`, type: 'link', active: false, selected: false, title: 'Colors' },
                    { path: `/components/bootstrap/dropdowns`, type: 'link', active: false, selected: false, title: 'DropDowns' },
                    { path: `/components/bootstrap/list-groups`, type: 'link',active: false, selected: false, title: 'List-Groups' },
                    { path: `/components/bootstrap/media-object`, type: 'link', active: false, selected: false, title: 'Media-Object' },
                    { path: `/components/bootstrap/modal`, type: 'link',active: false, selected: false, title: 'Modal' },
                    { path: `/components/bootstrap/navigation`, type: 'link', active: false, selected: false, title: 'Navigation' },
                    { path: `/components/bootstrap/offcanvas`, type: 'link', active: false, selected: false, title: 'OffCanvas' },
                    { path: `/components/bootstrap/pagination`, type: 'link',active: false, selected: false, title: 'Pagination' },
                    { path: `/components/bootstrap/panels`, type: 'link', active: false, selected: false, title: 'Panels' },
                    { path: `/components/bootstrap/progress`, type: 'link', active: false, selected: false, title: 'Progress' },
                    { path: `/components/bootstrap/tabs`, type: 'link',active: false, selected: false, title: 'Tabs' },
                    { path: `/components/bootstrap/tags`, type: 'link', title: 'Tags' },
                    { path: `/components/bootstrap/thumbnails`, type: 'link', title: 'Thumbnails' },
                    { path: `/components/bootstrap/toast`, type: 'link', title: 'Toast' },
                    { path: `/components/bootstrap/tooltip-popover`, type: 'link', title: 'Tooltip Popover' },
                    { path: `/components/bootstrap/typography`, type: 'link', title: 'Typography' },
                    { path: `/components/bootstrap/ribbons`, type: 'link', title: 'Ribbons' },
                ]
            },

            { path: `/components/landingpage/landingpage`, badge: "badge bg-green br-5 side-badge blink-text pb-1",badgetxt:"New", icon: 'fe fe-zap', type: 'link', active: true, selected: false, title: 'Landing Page' },
        ]
    },
    {
        menutitle: "PRE-BUILD-PAGES",
        Items: [
            {
                title: 'Pages', icon: "fe fe-layers", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/components/pages/edit-profile`, type: 'link', active: false, selected: false, title: 'Edit-profile' },
                    { path: `/components/pages/gallery`, type: 'link', active: false, selected: false, title: 'Gallery' },
                    { path: `/components/pages/mail-compose`, type: 'link', active: false, selected: false, title: 'Mail-compose' },
                    { path: `/components/pages/mail-index`, type: 'link', active: false, selected: false, title: 'Mail-inbox' },
                    { path: `/components/pages/mail-read`, type: 'link', active: false, selected: false, title: 'Mail-read' },
                    { path: `/components/pages/notifications-list`, type: 'link', active: false, selected: false, title: 'Notification-list' },
                    { path: `/components/pages/profile`, type: 'link', active: false, selected: false, title: 'Profile' },

                    {
                        title: 'Forms', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/components/pages/forms/form-advanced`, type: 'link', active: false, selected: false, title: 'Form-advanced' },
                            { path: `/components/pages/forms/form-editor`, type: 'link', active: false, selected: false, title: 'Form-editor' },
                            { path: `/components/pages/forms/form-elements`, type: 'link', active: false, selected: false, title: 'Form-elements' },
                            { path: `/components/pages/forms/form-layouts`, type: 'link', active: false, selected: false, title: 'Form-layouts' },
                            { path: `/components/pages/forms/form-validation`, type: 'link', active: false, selected: false, title: 'Form-validation' },
                            { path: `/components/pages/forms/form-wizard`, type: 'link', active: false, selected: false, title: 'Form-wizard' },
                            { path: `/components/pages/forms/form-input-spinner`, type: 'link', active: false, selected: false, title: 'Form-input-spinner' },
                        ]
                    },
                    {
                        title: 'Table', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/components/pages/tables/data-table`, type: 'link', active: false, selected: false, title: 'Data-Table' },
                            { path: `/components/pages/tables/default-table`, type: 'link', active: false, selected: false, title: 'Default-Table' },
                            { path: `/components/pages/tables/edit-table`, type: 'link', active: false, selected: false, title: 'Edit-Table' },
                        ]
                    },
                    {
                        title: 'Extension', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/components/pages/extension/about-company`, type: 'link', active: false, selected: false, title: 'About Company' },
                            { path: `/components/pages/extension/blog-details`, type: 'link', active: false, selected: false, title: 'Blog Details' },
                            { path: `/components/pages/extension/blog-post`, type: 'link', active: false, selected: false, title: 'Blog Post' },
                            { path: `/components/pages/extension/blog`, type: 'link', active: false, selected: false, title: 'Blogs' },
                            { path: `/components/pages/extension/emptypage`, type: 'link', active: false, selected: false, title: 'EmptyPage' },
                            { path: `/components/pages/extension/faqs`, type: 'link', active: false, selected: false, title: 'FAQS' },
                            { path: `/components/pages/extension/invoice`, type: 'link', active: false, selected: false, title: 'Invoice' },
                            { path: `/components/pages/extension/pricing-table`, type: 'link', active: false, selected: false, title: 'Pricing Table' },
                            { path: `/components/pages/extension/services`, type: 'link', active: false, selected: false, title: 'Services' },
                            { path: `/components/pages/extension/settings`, type: 'link', active: false, selected: false, title: 'Settings' },
                            { path: `/components/pages/extension/terms`, type: 'link', active: false, selected: false, title: 'Terms' },
                            { path: `/components/pages/extension/underconstruction`, type: 'link', active: false, selected: false, title: 'UnderConstruction' },

                        ]
                    },
                    { path: `/components/pages/switcher`, type: 'link', active: false, selected: false, title: 'Switcher' },
                    
                ]
            },
            {
                title: 'E-commerce', icon: "fe fe-shopping-bag", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/components/e-commerce/add-product`, type: 'link', active: false, selected: false, title: 'Add Product' },
                    { path: `/components/e-commerce/checkout`, type: 'link', active: false, selected: false, title: 'Checkout' },
                    { path: `/components/e-commerce/product-details`, type: 'link', active: false, selected: false, title: 'Product Details' },
                    { path: `/components/e-commerce/shop`, type: 'link', active: false, selected: false, title: 'Shop' },
                    { path: `/components/e-commerce/shopping-cart`, type: 'link', active: false, selected: false, title: 'ShoppingCart' },
                    { path: `/components/e-commerce/wishlist`, type: 'link', active: false, selected: false, title: 'Wishlist' },
                ]
            },
            {
                title: 'File-Manager', icon: "fe fe-folder", badge: "badge bg-pink side-badge", badgetxt: "4", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/components/filemanager/file-attachments`, type: 'link', active: false, selected: false, title: 'File-Attachments' },
                    { path: `/components/filemanager/file-details`, type: 'link', active: false, selected: false, title: 'File Details' },
                    { path: `/components/filemanager/file-manager`, type: 'link', active: false, selected: false, title: 'File Manager' },
                    { path: `/components/filemanager/file-manager-list`, type: 'link', active: false, selected: false, title: 'File-ManagerList' },
                ]
            },
        ]
    },

    {
        menutitle: "MISC PAGES",
        Items: [
            {
                title: 'Authentication', icon: "fe fe-users", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/components/authentication/login`, type: 'link', active: false, selected: false, title: 'Login' },
                    { path: `/components/authentication/register`, type: 'link', active: false, selected: false, title: 'Register' },
                    { path: `/components/authentication/forgot-password`, type: 'link', active: false, selected: false, title: 'Forgot Password' },
                    { path: `/components/authentication/lockscreen`, type: 'link', active: false, selected: false, title: 'LockScreen' },
                    {
                        title: 'ErrorPage', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/components/authentication/errorpages/error400`, type: 'link', active: false, selected: false, title: 'Error400' },
                            { path: `/components/authentication/errorpages/error401`, type: 'link', active: false, selected: false, title: 'Error401' },
                            { path: `/components/authentication/errorpages/error403`, type: 'link', active: false, selected: false, title: 'Error403' },
                            { path: `/components/authentication/errorpages/error404`, type: 'link', active: false, selected: false, title: 'Error404' },
                            { path: `/components/authentication/errorpages/error500`, type: 'link', active: false, selected: false, title: 'Error500' },
                            { path: `/components/authentication/errorpages/error503`, type: 'link', active: false, selected: false, title: 'Error503' },

                        ]
                    },
                ]
            },
        ]
    },

    {
        menutitle: "GENERAL",
        Items: [

            {
                title: 'Maps', icon: "fe fe-map-pin", type: 'sub',Name:"",Names:"", children: [
                    { path: `/components/maps/leaflet-maps`, type: 'link', active: false, selected: false, title: 'Leaflet-Maps' },
                ]
            },
            {
                title: 'Charts', icon: "fe fe-bar-chart-2", type: 'sub',Name:"",Names:"", badge: "badge bg-secondary side-badge", badgetxt: "6", children: [
                    { path: `/components/charts/chartjs`, type: 'link', active: false, selected: false, title: ' Chartjs' },
                    { path: `/components/charts/echart`, type: 'link', active: false, selected: false, title: ' Echart' },
                    
                ]
            },
            {
                title: 'Icons', icon: "fe fe-wind", type: 'sub',Name:"",Names:"", 
                children: [
                    { path: `/components/icons/bootstrap-icons`, type: 'link', active: false, selected: false, title: 'Bootstrap Icons' },
                    { path: `/components/icons/feather-icons`, type: 'link', active: false, selected: false, title: ' Feather Icons' },
                    { path: `/components/icons/flag-icon`, type: 'link', active: false, selected: false, title: ' Flag Icons' },
                    { path: `/components/icons/font-awesome-icons`, type: 'link', active: false, selected: false, title: 'Font-Awesome Icons' },
                    { path: `/components/icons/ionic-icons`, type: 'link', active: false, selected: false, title: ' Ionic Icons' },
                    { path: `/components/icons/materialdesign-icons`, type: 'link', active: false, selected: false, title: ' MaterialDesign Icons' },
                    { path: `/components/icons/pe7icons`, type: 'link', active: false, selected: false, title: ' Pe7 Icons' },
                    { path: `/components/icons/simpleline-icons`, type: 'link', active: false, selected: false, title: 'Simpleline Icons' },
                    { path: `/components/icons/themifyicons`, type: 'link', active: false, selected: false, title: ' Themify Icons' },
                    { path: `/components/icons/typicons-icons`, type: 'link', active: false, selected: false, title: ' Typicons Icons' },
                    { path: `/components/icons/weather-icons`, type: 'link', active: false, selected: false, title: ' Weather Icons' },
                ]
            },

        ]
    },
];
