import { addons, types } from "@storybook/manager-api";

import { ADDON_ID, TOOL_ID } from "./constants";
import { GitHub } from "./GitHub";

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "GitHub",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ({ active }) => <GitHub active={active} api={api} />,
  });
});
