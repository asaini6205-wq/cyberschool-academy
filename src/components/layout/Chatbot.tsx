'use client'

import Script from 'next/script'

export default function Chatbot() {

  return (

    <Script
      id="tawk-chat"
      strategy="afterInteractive"
    >
      {`

        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

        (function() {

          var s1=document.createElement("script");

          var s0=document.getElementsByTagName("script")[0];

          s1.async = true;

          s1.src='https://embed.tawk.to/6a120cdf6c9f0e1c3204ebe5/1jpb84ioo';

          s1.charset='UTF-8';

          s1.setAttribute('crossorigin','*');

          s0.parentNode.insertBefore(s1,s0);

        })();

      `}
    </Script>

  )

}