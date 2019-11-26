import React from 'react';
import SeoBanner from '../SeoBanner/template';
import { withKnobs, text, boolean, color, array } from "@storybook/addon-knobs";


export const WithImage = () => {

    const SeoBannerStoryOptions = {
        color: color("Color", "#fff", "OPTIONS"),
        bgColor: text("BgColor", "#f3f3f3", "OPTIONS"),
        col: {
            md: "8",
            xl: "4"
        }
    };
    const content = {
        title: text("Title", "Plus Size New In", "CONTENT"),
        body: text("Body",
            `
                    <p>
                    Shop the newest plus size dresses, tops, knits, skirts and
                    trousers from our sister brand Studio 8, available up to size 26.
                    </p>
        `, "CONTENT"),
        images: {
            fromSlot: boolean("URL From Slot", true, "CONTENT"),
            desktop: {
                src: text("Img Src", "/phaseeight/images/SEO_Banner/08/Denver.jpg", "CONTENT"),
                alt: text("Img Alt", "Plus Size New In", "CONTENT")
            }
        },
        list: [
            {
                title: text("1st Link", "dresses", "LINKS"),
                link: {
                    id: text("1st Link ID", "dresses-1", "LINKS")
                }
            },
            {
                title: text("2nd Link", "premium collection", "LINKS"),
                link: {
                    id: text("2nd Link ID", "premium-collection", "LINKS")
                }
            },
            {
                title: text("3rd Link", "tops", "LINKS"),
                link: {
                    id: text("3rd Link ID", "tops-1", "LINKS")
                }
            },
            {
                title: text("4th Link", "", "LINKS"),
                link: {
                    id: text("4th Link ID", "", "LINKS")
                }
            }
        ]
    }
    content.list = content.list.filter(item => item.title !== "");

    return (
        <SeoBanner content={content} options={SeoBannerStoryOptions}></SeoBanner>
    );
}

export const Default = () => {

    const SeoBannerStoryOptions = {
        color: color("Color", "#000", "OPTIONS"),
        bgColor: text("BgColor", "#f3f3f3", "OPTIONS"),
        col: {
            md: "8",
            xl: "4"
        }
    };
    const content = {
        title: text("Title", "Plus Size New In", "CONTENT"),
        body: text("Body",
            `
                    <p>
                    Shop the newest plus size dresses, tops, knits, skirts and
                    trousers from our sister brand Studio 8, available up to size 26.
                    </p>
        `, "CONTENT")
    }

    return (
        <SeoBanner content={content} options={SeoBannerStoryOptions}></SeoBanner>
    );
}


export default {
    title: 'Seo Banner',
    decorators: [withKnobs]
};