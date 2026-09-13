export const locales = {
    en: {
        nav: {
            features: 'Features',
            pricing: 'Pricing',
            useCases: 'Use Cases',
            socialProof: 'Testimonials',
            faq: 'FAQ',
            login: 'Login',
            getStarted: 'Get Started',
        },
        hero: {
            title: 'Boost Your Sales Performance\nMake Every Deal Clear',
            subtitle: 'Integrate customer tracking, smart alerts, and automated workflows to help your sales team focus on closing, not chores.',
            cta: 'Start Free Trial',
            secondaryCta: 'View Pricing',
            stats: [
                { value: '37%', label: 'Increase in closing rate' },
                { value: '2.4x', label: 'Sales efficiency boost' },
                { value: '60%', label: 'Reduction in missed follow-ups' },
            ],
            mockup: {
                col1: 'Initial Contact',
                col2: 'Needs Analysis',
                col3: 'Quoting',
                col4: 'Closed Won 🎉',
            }
        },
        features: {
            title: 'One Platform, All Sales Challenges Solved',
            desc: 'From pipeline management to data analytics, SalesPilot covers every function your sales team needs daily.',
            list: [
                { id: 'pipeline', title: 'Visual Pipeline', desc: 'Manage every deal progress with drag-and-drop. Clear visibility from contact to close.' },
                { id: 'automation', title: 'Smart Automation', desc: 'Auto-assignment, follow-up reminders, and stage movement notifications.' },
                { id: 'analytics', title: 'Real-time Analytics', desc: 'Data-driven decisions from conversion rates to revenue forecasts.' },
                { id: 'contacts', title: '360° Customer View', desc: 'Centralized interaction history, call notes, and emails.' },
                { id: 'integrations', title: 'Seamless Integration', desc: 'Deep integration with Gmail, Outlook, LINE, Slack, and Google Calendar.' },
                { id: 'mobile', title: 'Mobile Sync', desc: 'Update visit records, GPS check-ins, and photo uploads on the go.' },
            ]
        },
        socialProof: {
            heading: 'Trusted by over 500 companies',
            testimonial: {
                quote: "After implementing SalesPilot, our sales team never misses a follow-up. Our closing rate increased by 40%.",
                author: "Lin Zhi-Yuan",
                role: "VP of Sales",
                company: "Bostar Tech"
            }
        },
        useCases: {
            title: 'No Matter Your Role, SalesPilot Helps You Win',
            list: [
                {
                    role: 'Field Sales',
                    title: 'Never Miss a Lead on the Road',
                    desc: 'Update visit records via mobile app. Smart routing helps you visit 3 more clients daily.',
                    highlights: ['Mobile Sync', 'Smart Routing', 'GPS Check-in', 'Offline Mode']
                },
                {
                    role: 'Inside Sales',
                    title: 'Prepared for Every Call',
                    desc: 'Incoming calls show history and last quote. Smart dialing and templates double your reach.',
                    highlights: ['Instant Info', 'Smart Dialing', 'Email Templates', 'Call Recording']
                },
                {
                    role: 'Sales Manager',
                    title: 'Team Performance at a Glance',
                    desc: 'Real-time dashboard for pipeline health and revenue forecasts. Make decisions without waiting for monthly reports.',
                    highlights: ['Performance Dashboard', 'Revenue Forecast', 'Pipeline Health', 'KPI Tracking']
                }
            ]
        },
        pricing: {
            title: 'Simple, Transparent Pricing',
            subtitle: 'All plans include a 14-day free trial, no credit card required.',
            monthly: 'Monthly',
            yearly: 'Yearly',
            save: 'Save 20%',
            plan_starter: 'Starter',
            plan_pro: 'Professional',
            plan_enterprise: 'Enterprise',
            per_month: '/month',
            per_year: '/year',
            select: 'Choose Plan',
            plans: [
                {
                    name: 'Starter',
                    desc: 'Perfect for small teams just getting started',
                    cta: 'Start Free Trial',
                    features: [
                        'Up to 3 users',
                        'Basic Pipeline',
                        'Contact Management (1,000 limit)',
                        'Email Integration',
                        'Basic Reporting',
                        'Community Support'
                    ]
                },
                {
                    name: 'Pro',
                    desc: 'Best for growing teams',
                    badge: 'Most Popular',
                    cta: 'Start Free Trial',
                    features: [
                        'Unlimited users',
                        'Advanced Pipeline & Automation',
                        'Unlimited Contact Management',
                        'Email + LINE + Slack Integration',
                        'Advanced Reporting & Dashboards',
                        'Revenue Forecasting',
                        'API Access',
                        'Priority Support'
                    ]
                },
                {
                    name: 'Enterprise',
                    desc: 'Tailored for large organizations',
                    price: 'Contact Us',
                    cta: 'Contact Sales',
                    features: [
                        'All Pro features',
                        'Dedicated Customer Success Manager',
                        'Custom Integration Development',
                        'SSO / SAML Authentication',
                        '99.9% Uptime SLA',
                        'Advanced Security & Audit Logs',
                        'On-site Training',
                        'Custom Contracts'
                    ]
                }
            ]
        },
        cta: {
            title: 'Ready to Boost Your Sales Efficiency?',
            desc: 'Join over 500 companies using SalesPilot to supercharge their sales teams. 14-day free trial, no credit card required.',
            btn_primary: 'Schedule Demo',
            btn_secondary: 'View Pricing',
        },
        faq: {
            badge: 'FAQ',
            title: 'Frequently Asked Questions',
            q1: 'Is there a free trial?',
            a1: 'Yes, we offer a 14-day free trial for all plans.',
            q2: 'Can I change plans anytime?',
            a2: 'Absolutely, you can upgrade or downgrade whenever you like.',
            q3: 'Do you offer support?',
            a3: 'Yes, 24/7 support is included in all paid plans.',
        },
        footer: {
            brandDesc: 'Your sales growth engine. Master your pipeline, boost closing rates.',
            copyright: `© ${new Date().getFullYear()} SalesPilot. All rights reserved.`,
            cols: [
                { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'API Docs', 'System Status'] },
                { title: 'Resources', links: ['Tutorials', 'Blog', 'Case Studies', 'Webinars', 'Help Center'] },
                { title: 'Company', links: ['About Us', 'Join Us', 'Contact', 'Partners', 'Newsroom'] },
                { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'DPA', 'Cookie Policy'] },
            ]
        },
        cookie: {
            message: 'We use cookies to improve your experience.',
            accept: 'Accept',
        },
        loading: {
            text: 'Loading...',
        },
    },
    zh: {
        nav: {
            features: '功能特色',
            pricing: '價格方案',
            useCases: '應用場景',
            socialProof: '客戶見證',
            faq: '常見問題',
            login: '登入',
            getStarted: '免費開始',
        },
        hero: {
            title: '讓每一條銷售線\n都清晰可見',
            subtitle: '整合客戶追蹤、智慧提醒與自動化流程，幫助你的業務團隊專注在成交，而非瑣事。',
            cta: '免費開始',
            secondaryCta: '查看方案',
            stats: [
                { value: '37%', label: '平均成交率提升' },
                { value: '2.4x', label: '業務效率倍增' },
                { value: '60%', label: '跟進遺漏減少' },
            ],
            mockup: {
                col1: '初步接觸',
                col2: '需求確認',
                col3: '報價中',
                col4: '成交 🎉',
            }
        },
        features: {
            title: '一個平台，解決所有銷售挑戰',
            desc: '從管線管理到數據分析，SalesPilot 涵蓋業務團隊日常所需的每一項功能。',
            list: [
                { id: 'pipeline', title: '視覺化銷售管線', desc: '用拖拉的方式管理每一筆交易進度，從初次接觸到成交一目瞭然。' },
                { id: 'automation', title: '智慧自動化流程', desc: '自動指派、跟進提醒、階段推進通知，把重複性工作交給系統。' },
                { id: 'analytics', title: '即時數據分析', desc: '從轉換率、平均成交天數到營收預測，用數據驅動決策。' },
                { id: 'contacts', title: '360° 客戶檢視', desc: '集中管理客戶互動紀錄、通話備註、郵件往來，讓每一次接觸都有脈絡。' },
                { id: 'integrations', title: '無縫整合生態系', desc: '與 Gmail、Outlook、LINE、Slack、Google Calendar 深度整合。' },
                { id: 'mobile', title: '行動端即時同步', desc: '外勤拜訪也能即時更新進度、拍照上傳。離線模式下仍可操作。' },
            ]
        },
        socialProof: {
            heading: '超過 500 家企業信賴 SalesPilot',
            testimonial: {
                quote: "導入 SalesPilot 後，我們的業務團隊不再遺漏任何跟進時機，成交率整整提升了 40%。",
                author: "林志遠",
                role: "業務副總",
                company: "博星科技"
            }
        },
        useCases: {
            title: '無論你的角色，SalesPilot 都能助你一臂之力',
            list: [
                {
                    role: '外勤業務',
                    title: '在路上也不錯過任何商機',
                    desc: '透過行動 App 即時更新拜訪紀錄。系統自動計算最佳拜訪路線，讓你每天多跑 3 家客戶。',
                    highlights: ['行動 App 即時同步', '智慧路線規劃', 'GPS 拜訪打卡', '離線模式支援']
                },
                {
                    role: 'Inside Sales',
                    title: '每通電話都有備而來',
                    desc: '來電自動帶出客戶歷史互動、上次報價。搭配智慧撥號與郵件模板，讓你的觸及效率翻倍。',
                    highlights: ['來電客戶資訊速查', '智慧撥號排程', '郵件模板自動化', '通話錄音與備註']
                },
                {
                    role: 'Sales Manager',
                    title: '團隊戰力一眼掌握',
                    desc: '即時儀表板呈現團隊管線健康度、個人績效排名。不用等月會報告，隨時做出精準決策。',
                    highlights: ['團隊績效儀表板', '營收預測模型', '管線健康度分析', '自訂 KPI 追蹤']
                }
            ]
        },
        pricing: {
            title: '簡單透明的價格',
            subtitle: '所有方案均含 14 天免費試用，不需預先綁定信用卡。',
            monthly: '月付',
            yearly: '年付',
            save: '省 20%',
            plan_starter: '入門版',
            plan_pro: '專業版',
            plan_enterprise: '企業版',
            per_month: '/月',
            per_year: '/年',
            select: '選擇方案',
            plans: [
                {
                    name: 'Starter',
                    desc: '適合剛起步的小型團隊',
                    cta: '免費試用 14 天',
                    features: [
                        '最多 3 位使用者',
                        '基礎銷售管線',
                        '聯絡人管理（上限 1,000 筆）',
                        'Email 整合',
                        '基礎報表',
                        '社群支援',
                    ]
                },
                {
                    name: 'Pro',
                    desc: '成長中團隊的首選方案',
                    badge: '最受歡迎',
                    cta: '免費試用 14 天',
                    features: [
                        '無限使用者',
                        '進階銷售管線 & 自動化',
                        '聯絡人管理（無上限）',
                        'Email + LINE + Slack 整合',
                        '進階報表 & 儀表板',
                        '營收預測',
                        'API 存取',
                        '優先客服支援',
                    ]
                },
                {
                    name: 'Enterprise',
                    desc: '為大型組織量身打造',
                    price: '聯繫我們',
                    cta: '聯繫業務團隊',
                    features: [
                        '所有 Pro 功能',
                        '專屬客戶成功經理',
                        '自訂整合開發',
                        'SSO / SAML 身份驗證',
                        'SLA 保證 99.9% 可用性',
                        '進階資安與稽核日誌',
                        '到府教育訓練',
                        '合約客製化',
                    ]
                }
            ]
        },
        cta: {
            title: '準備好提升你的業務效率了嗎？',
            desc: '加入超過 500 家企業的行列，用 SalesPilot 讓你的銷售團隊如虎添翼。14 天免費試用，不需信用卡。',
            btn_primary: '立即預約 Demo',
            btn_secondary: '查看方案比較',
        },
        faq: {
            badge: '常見問題',
            title: '常見問題',
            q1: '有免費試用嗎？',
            a1: '是的，我們所有方案都提供 14 天免費試用。',
            q2: '隨時可以更換方案嗎？',
            a2: '沒問題，您可以隨時升級或降級您的方案。',
            q3: '有提供客服支援嗎？',
            a3: '是的，所有付費方案都包含 24/7 全天候支援。',
        },
        footer: {
            brandDesc: '你的業務成長引擎。助你掌控銷售管線，提升成交率。',
            copyright: `© ${new Date().getFullYear()} SalesPilot. All rights reserved.`,
            cols: [
                { title: '產品', links: ['功能總覽', '方案價格', '產品更新日誌', 'API 文件', '系統狀態'] },
                { title: '資源', links: ['使用教學', '部落格', '客戶案例', '網路研討會', '幫助中心'] },
                { title: '公司', links: ['關於我們', '加入團隊', '聯絡我們', '合作夥伴', '新聞室'] },
                { title: '法務', links: ['隱私權政策', '服務條款', '資料處理協議', 'Cookie 政策'] },
            ]
        },
        cookie: {
            message: '我們使用 Cookie 來改善您的體驗。',
            accept: '接受',
        },
        loading: {
            text: '載入中...',
        },
    },
};
