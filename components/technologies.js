import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
    {
        img: "https://spring.io/img/spring-2.svg",
        title: "Spring",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        title: "React",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png",
        title: "Java",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eclipse-Luna-Logo.svg/470px-Eclipse-Luna-Logo.svg.png?20181004114753",
      title: "Eclipse",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png",
        title: "JavaScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      title: "MongoDB",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/320px-Vercel_logo_black.svg.png",
      title: "Vercel"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      title: "Next.js",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg",
      title: "Maven",
    },
    {
      img: "https://nodejs.dev/static/images/brand/logos-js-right/dark.svg",
      title: "Node.js",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hibernate_logo.svg/320px-Hibernate_logo.svg.png",
      title: "Hibernate",
    },
    {
      img: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      title: "MySQL",
    },
    {
      img: "https://seeklogo.com/images/T/thirdweb-logo-A5219DC0EE-seeklogo.com.png",
      title: "ThirdWeb",
    },
    {
      img: "https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).png",
      title: "OpenSea",
    },
    {
      img: "https://etherscan.io/images/brandassets/etherscan-logo.svg",
      title: "Etherscan",
    },
    {
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",
      title: "GitHub",
    },
    {
      img: "https://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-PNG.png",
      title: "Python",
    },
    {
      img: "https://static.wikia.nocookie.net/logopedia/images/6/61/Visual_Studio_2017_logo_and_wordmark.svg",
      title: "Visual Studio"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/380px-FileZilla_logo.svg.png",
      title: "FileZilla",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F140692%2Fisolated%2Fpreview%2F72d1f12edf758d24f5b6db73bac4f297-linux-logo-by-vexels.png&f=1&nofb=1&ipt=1b352ac0a577e63dd8d868b1e06a2b9d41ed41978acda0aa2a7d469c454a951b&ipo=images",
      title: "Linux",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Selenium_logo.svg",
      title: "Selenium",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
      title: "HTML",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
      title: "CSS",
    },
    {
      img: "https://cdn2.hubspot.net/hubfs/1840687/Pages/trademark/vaadin-logo-full.svg",
      title: "Vaadin"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/512px-Vmware.svg.png?20230330180552",
      title: "VMWare",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg",
      title: "Heroku",
    }
];

function Technologies() {
    return (
        <Box
            sx={{
                marginTop: "20px",
                width: "100%",
                height: 450,
                overflowY: "scroll",
            }}
        >
            <ImageList variant="masonry" cols={4} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default Technologies;
