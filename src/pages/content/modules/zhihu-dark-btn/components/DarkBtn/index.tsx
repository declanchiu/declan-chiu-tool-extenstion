import { onMount } from 'solid-js';

import DarkIcon from "../../../../../../assets/content/zhihu-dark-icon.png";

import "./index.css";

const ZhihuDarkBtn = () => {
  onMount(() => {
    test();
  })


  const test = () => {
    const TopstoryItemList = document.getElementsByClassName("TopstoryItem");
    const list = Array.from(TopstoryItemList);

    const tabBarList = list.map((item) => {
      return item.getElementsByClassName("ContentItem-actions");
    });

    const metaList = list.map((item) => {
      return item.getElementsByTagName("meta");
    });

    let toUrlList: any[] = [];
    metaList.forEach((item) => {
      const itemArr = Array.from(item);
      itemArr.forEach((son) => {
        const isUrl = son.getAttribute("itemprop") === "url";
        if (isUrl) {
          const articleUrl = son.getAttribute("content") + '?theme=dark';
          toUrlList.push(articleUrl);
        }
      });
    });

    const toArticle = (index: number) => {
      window.open(toUrlList[index]);
    }

    tabBarList.forEach((item, index) => {
      if (item[0]) {
        item[0].classList.add("_self-injection-zhihu_btn")
        item[0].append(
          // @ts-ignore
          <img
            src={chrome.runtime.getURL(DarkIcon)}
            class="dark-btn_wrapper"
            onClick={() => toArticle(index)}
          />
        );
      }
    });

    console.log("查看跳转链接", tabBarList);
  };

  return (
    <></>
  );
};

export default ZhihuDarkBtn;
