import React from "react";
import AppList from "@devdocs/components/AppList";
import AppCard from "@devdocs/components/AppCard";
import SuggestionItem from "./SuggestionItem";
import { useIntl } from "react-intl";
import { SuggestionType } from "@devdocs/types/models/apps/Wall";

type Props = {
  suggestions: SuggestionType[];
};

const Suggestions = ({ suggestions }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["wall.suggestions"] as string}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <AppList
        data={suggestions}
        renderRow={(item, index) => <SuggestionItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default Suggestions;
