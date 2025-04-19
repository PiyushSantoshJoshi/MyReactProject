import React from 'react';

export default function Imageresizer({ imageUrl }) {

    // const [imgW, setImageW] = React.useState(200);
    // const [imgH, setImageH] = React.useState(300);


    // mobile 100 x 150
    // tablet 150 x 225
    // desktop 200 x 300
    return (
        <div style={{
            // width: { imgW },
            // height: { imgH },
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            border: "1px solid #ccc"
        }}>
            <img
                src={imageUrl}
                alt="Example Image"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
        </div>
    );
}
