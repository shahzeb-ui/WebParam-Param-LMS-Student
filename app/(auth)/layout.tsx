import './auth.scss'

export default function layout({children}:any) {
    return (
        <section className="layoutContainer">
        <svg width="543" height="832" viewBox="0 0 543 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_629_512)">
            <path d="M54.1761 850.547C148.67 986.846 -379.246 912.906 -509.131 725.559C-625.038 558.374 -588.717 332.52 -266.679 109.255C55.3578 -114.009 410.382 -159.469 526.29 7.71607C642.197 174.902 -135.462 416.649 54.1761 850.547Z" fill="url(#paint0_linear_629_512)"/>
            </g>
            <defs>
            <filter id="filter0_d_629_512" x="-573.352" y="-93.0927" width="1115.49" height="1021.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_629_512"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_629_512" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_629_512" x1="460.408" y1="-46.611" x2="-864.207" y2="871.506" gradientUnits="userSpaceOnUse">
            <stop offset="0.116066" stop-color="#2f57ef"/>
            <stop offset="0.304697" stop-color="#b966e7"/>
            <stop offset="1" stop-color="#2f57ef"/>
            </linearGradient>
            </defs>
        </svg>
        {children}
        <svg width="630" height="832" viewBox="0 0 630 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_629_509)">
            <path d="M281.557 65.3987L707.631 -300L708.791 850.967C708.791 850.967 -301.793 1126.57 97.7186 851.583C497.23 576.596 541.893 672.655 291.594 454.384C41.2956 236.112 281.557 65.3987 281.557 65.3987Z" fill="url(#paint0_linear_629_509)"/>
            </g>
            <defs>
            <filter id="filter0_d_629_509" x="0.256012" y="-300" width="712.535" height="1281.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_629_509"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_629_509" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_629_509" x1="547.279" y1="283.98" x2="-14.2188" y2="287.627" gradientUnits="userSpaceOnUse">
            <stop stop-color="#b966e7"/>
            <stop offset="0.56933" stop-color="#2f57ef"/>
            </linearGradient>
            </defs>
        </svg>

        </section>
    )
}