import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../../store/store-slice";
import { GrClose } from "react-icons/gr";

import classes from "./ListLayout.module.css";

const ListLayOut = () => {
  const appStore = useSelector((state) => state.appStore);
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(1);
  const [list, setList] = useState(appStore.newsList.slice((pageCount-1) * 6, (pageCount * 6)));

  useEffect(() => {
      setList(appStore.newsList.slice((pageCount-1) * 6, (pageCount * 6)-pageCount))
  },[pageCount])
  

  const truncateText = (text) => {
    const words = text.split(" ");
    if (words.length > 10) {
      return `${words.slice(0, 10).join(" ")}...`;
    }
    return text;
  };

  const deleteHandler = (item) => {
    dispatch(storeActions.delteItem(item))
  }
  return (
    <div className={classes.listCon}>
      <ul className={classes.listUl}>
        {list.map((i) => (
          <li key={i.userId} className={classes.listItem}>
            <div className={classes.listCard}>
              <img src="https://s3-alpha-sig.figma.com/img/653e/606a/6463c908ec756c9506803122106aac81?Expires=1698624000&Signature=MlnLlSQa1RnAm5n1ZQEifCC9u7xu8RcG6aVnaGD9NCmTCozrb6KC3nJ6ZAzEVhtAKUwH~nW95Ied1B7JDk~o8MbIRnPwURn-senmP8YFLWTGtH1dbbwduco7LfwTn~tv5dK0zN0jq-cNH4rHYn~TbUlKSbRx8p1FbQc-hqN7YAgBZAwC2UWgUS0yHVxedAltXRmU~4xXvVbcouFcAaevF6q76ZhKnxi6esFiT690b8~udrGOhffX7iPUg7rL8nmtvqdltzW~nhZ0eEjea2Iit9~fWBRVX4FMgcxJcjpqG91x0lN93wVMpuTjQjfeUdcXyvQqEQcwOql5Dnh-wayWDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              <div className={classes.listTextCon}>
                <h3>{i.title}</h3>
                <p>{truncateText(i.body)}</p>
                <span>Mon, 21 Dec 2020 14:57 GMT</span>
              </div>
            </div>
            <span className={classes.close} onClick={()=>deleteHandler(i.userId)}>
              <GrClose />{" "}
            </span>
          </li>
        ))}
      </ul>
      <ul className={classes.pageCountCon}>
        <li onClick={(e)=> setPageCount(1)}>1</li>
        <li onClick={(e)=> setPageCount(2)}>2</li>
        <li onClick={(e)=> setPageCount(3)}>3</li>
      </ul>
    </div>
  );
};

export default ListLayOut;
