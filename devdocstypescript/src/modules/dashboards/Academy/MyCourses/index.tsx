import React, { useState } from "react";
import AppCard from "@devdocs/components/AppCard";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import AppList from "@devdocs/components/AppList";
import CourseCell from "./CourseCell";
import { CoursesType } from "@devdocs/types/models/dashboards/Academy";
import IntlMessages from "@devdocs/helpers/IntlMessages";

type Props = {
  courses: CoursesType;
};
const MyCourses = ({ courses }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(
    courses.categories[0].slug
  );

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="academy.myCourses" />}
      contentStyle={{ px: 0 }}
    >
      <Box
        sx={{
          mb: 2,
          px: 5,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {courses.categories.map((item, index) => (
          <Box
            sx={{
              mr: 3,
              mb: 1,
            }}
            key={index}
          >
            <Chip
              onClick={() => handleChangeCategory(item.slug)}
              sx={{
                cursor: "pointer",
                backgroundColor: (theme) =>
                  item.slug === selectedCategory
                    ? theme.palette.primary.main
                    : theme.palette.background.default,
                color: (theme) =>
                  item.slug === selectedCategory
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                "&:hover, &:focus": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.primary.contrastText,
                },
              }}
              key={index}
              label={item.title}
            />
          </Box>
        ))}
      </Box>
      <AppList
        animation="transition.slideRightBigIn"
        data={courses.courses}
        renderRow={(data, index) => <CourseCell key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyCourses;
