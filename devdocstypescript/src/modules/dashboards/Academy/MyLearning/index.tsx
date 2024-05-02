import React from "react";
import AppCard from "@devdocs/components/AppCard";
import AppList from "@devdocs/components/AppList";
import LearningItem from "./LearningItem";
import { LearningDaumType } from "@devdocs/types/models/dashboards/Academy";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  learningData: LearningDaumType[];
};
const MyLearning = ({ learningData }: Props) => {
  return (
    <AppCard
      title={<IntlMessages id="academy.myLearning" />}
      contentStyle={{ px: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={learningData}
        renderRow={(data, index) => <LearningItem key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyLearning;
