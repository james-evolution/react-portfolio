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
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoresumo.com%2Fwp-content%2Fuploads%2F2019%2F12%2FJava_logo_icon-2048x1147.png&f=1&nofb=1&ipt=b69fb6af35ddc87221924acab3eeca4fce9c361f5915b4829d0f784b2c3e0e1e&ipo=images",
        title: "Java",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433",
        title: "JavaScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      title: "MongoDB",
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
            <ImageList variant="masonry" cols={3} gap={8}>
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
