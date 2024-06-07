import { IconButton, Icons } from "@storybook/components";
import { useParameter, API } from "@storybook/manager-api";
import { GitHubParameter } from "./types";

type Props = Readonly<{ active?: boolean; api: API }>;

export const GitHub = ({ active, api }: Props) => {
  const currentStoryData = api.getCurrentStoryData();

  const {
    baseURL = "https://github.com",
    repository,
    branch,
  } = useParameter<GitHubParameter>("github", {});

  if (!currentStoryData || !repository || !branch) {
    return null;
  }

  const url = [
    baseURL,
    repository,
    "blob",
    branch,
    currentStoryData.importPath.replace(/\.\//, ""),
  ].join("/");

  return (
    <IconButton active={active}>
      <a href={url} title="GitHub" target="_blank" rel="noreferrer">
        <Icons icon="github" />
      </a>
    </IconButton>
  );
};
