import DarkIcon from '../../../../../../assets/content/zhihu-dark-icon.png';

import "./index.css";

const ZhihuDarkBtn = () => {
  const test = () => {
    const TopstoryItemList = document.getElementsByClassName("TopstoryItem");
    const list = Array.from(TopstoryItemList);
    const metaList = list.map(item => {
      return item.getElementsByTagName("meta");
    })

    let toUrlList: any[] = [];
    metaList.forEach(item => {
      const itemArr = Array.from(item);
      itemArr.forEach(son => {
        const isUrl = son.getAttribute('itemprop') === "url";
        if (isUrl) {
          toUrlList.push(son.getAttribute('content'));
        }
      })
    })


    console.log("查看跳转链接", toUrlList);
  }

  return <img src={chrome.runtime.getURL(DarkIcon)} class="dark-btn_wrapper" onClick={test} />
}

export default ZhihuDarkBtn;