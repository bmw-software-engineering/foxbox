// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { useCrash } from "@lichtblick/hooks";
import { CaptureErrorBoundary } from "@lichtblick/studio-base/components/CaptureErrorBoundary";
import Panel from "@lichtblick/studio-base/components/Panel";
import { PanelExtensionAdapter } from "@lichtblick/studio-base/components/PanelExtensionAdapter";
import { createSyncRoot } from "@lichtblick/studio-base/panels/createSyncRoot";
import ThemeProvider from "@lichtblick/studio-base/theme/ThemeProvider";
import { SaveConfig } from "@lichtblick/studio-base/types/panels";
import { PanelExtensionContext } from "@lichtblick/suite";
import { StrictMode, useMemo } from "react";

import { Indicator } from "./Indicator";
import { Config } from "./types";

function initPanel(crash: ReturnType<typeof useCrash>, context: PanelExtensionContext) {
  return createSyncRoot(
    <StrictMode>
      <CaptureErrorBoundary onError={crash}>
        <ThemeProvider isDark>
          <Indicator context={context} />
        </ThemeProvider>
      </CaptureErrorBoundary>
    </StrictMode>,
    context.panelElement,
  );
}

type Props = {
  config: Config;
  saveConfig: SaveConfig<Config>;
};

function IndicatorLightPanelAdapter(props: Props) {
  const crash = useCrash();
  const boundInitPanel = useMemo(() => initPanel.bind(undefined, crash), [crash]);

  return (
    <PanelExtensionAdapter
      config={props.config}
      saveConfig={props.saveConfig}
      initPanel={boundInitPanel}
      highestSupportedConfigVersion={1}
    />
  );
}

IndicatorLightPanelAdapter.panelType = "Indicator";
IndicatorLightPanelAdapter.defaultConfig = {};

export default Panel(IndicatorLightPanelAdapter);
