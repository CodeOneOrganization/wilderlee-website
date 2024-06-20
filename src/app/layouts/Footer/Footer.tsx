import Card from "@/app/layouts/Footer/card";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container row`}>
      <Card
        Title="Contato"
        paragraph1="named@gmail.com"
        paragraph2="+55 81 00000-0000"
        paragraph3="@wilderlee.personal"
      />

      <div className={styles.siteMap}>
        <Card
          Title="Sitemap"
          paragraph1="Contato"
          paragraph2="Suporte e Ajuda"
          paragraph3="Planos"
        />
      </div>

      <div className={styles.call}>
        <button className={styles.button_call}>Entrar em Contato</button>

        <div className={styles.call_svg_logo}>
          <svg
            width="161"
            height="162"
            viewBox="0 0 161 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_184_1218"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="161"
              height="162"
            >
              <rect width="161" height="161.329" rx="1.64286" fill="#00BAF7" />
            </mask>
            <g mask="url(#mask0_184_1218)">
              <path
                d="M19.7143 9.85742V0.000278473H3.43323e-05V9.85742H19.7143ZM9.85718 107.279H3.43323e-05V131.076L16.8272 114.249L9.85718 107.279ZM3.43323e-05 9.85742V107.279H19.7143V9.85742H3.43323e-05ZM16.8272 114.249L78.9272 52.1489L64.9871 38.2088L2.88713 100.309L16.8272 114.249ZM64.9871 52.1489L111.809 98.9703L125.749 85.0302L78.9273 38.2088L64.9871 52.1489ZM78.9272 52.1489C74.6714 56.4047 68.4173 55.5791 64.9871 52.1489L78.9273 38.2088C75.4971 34.7787 69.2429 33.953 64.9871 38.2088L78.9272 52.1489Z"
                fill="#00BAF7"
              />
              <path
                d="M150.321 10.6792V150.158H137.343L72.1215 84.9363C49.8588 107.199 18.1556 138.902 -4.10712 161.165"
                stroke="#00BAF7"
                stroke-width="21.3571"
                stroke-linecap="square"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className={`${styles.bottom} container row`}>
        <p className="small">Todos os direitos reservados</p>
        <p className="small">Website by Synergy Code</p>
      </div>
    </footer>
  );
}
