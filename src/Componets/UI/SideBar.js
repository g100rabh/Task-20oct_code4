import React, { useState } from "react";

import classes from "./SideBar.module.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";

const SideBar = () => {
  const [listVisible, setListVisible] = useState(true);
  return (
    <div className={classes.sideCon}>
      <div className={classes.mainCon}>
        <section className={classes.secOne}>
          <img src="https://s3-alpha-sig.figma.com/img/653e/606a/6463c908ec756c9506803122106aac81?Expires=1698624000&Signature=MlnLlSQa1RnAm5n1ZQEifCC9u7xu8RcG6aVnaGD9NCmTCozrb6KC3nJ6ZAzEVhtAKUwH~nW95Ied1B7JDk~o8MbIRnPwURn-senmP8YFLWTGtH1dbbwduco7LfwTn~tv5dK0zN0jq-cNH4rHYn~TbUlKSbRx8p1FbQc-hqN7YAgBZAwC2UWgUS0yHVxedAltXRmU~4xXvVbcouFcAaevF6q76ZhKnxi6esFiT690b8~udrGOhffX7iPUg7rL8nmtvqdltzW~nhZ0eEjea2Iit9~fWBRVX4FMgcxJcjpqG91x0lN93wVMpuTjQjfeUdcXyvQqEQcwOql5Dnh-wayWDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <span>
            <h3>Hi, Reader</h3>
            <p>Here your News!</p>
          </span>
        </section>

        <section className={classes.secTwo}>
          <h2>View toggle</h2>
          <section className={classes.secTwoIn}>
            <button style={{backgroundColor: listVisible ? "inherit" : "#A3FFD3" }} onClick={() => setListVisible(false)}>
              <BsCardText />
            </button>
            <button style={{backgroundColor: listVisible ? "#A3FFD3" : "inherit" }}  onClick={() => setListVisible(true)}>
              <AiOutlineUnorderedList />
            </button>
          </section>
        </section>

        <section className={classes.sec3}>
          <h2>Have a Feedback?</h2>
          <button>
            <h3>We’re Listening!</h3>
          </button>
        </section>
      </div>
    </div>
  );
};

export default SideBar;
