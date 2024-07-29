// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/


import { AppBarProps } from "@lichtblick/studio-base/components/AppBar";
import { CustomWindowControlsProps } from "@lichtblick/studio-base/components/AppBar/CustomWindowControls";
import { IAppConfiguration } from "@lichtblick/studio-base/context/AppConfigurationContext";
import { INativeAppMenu } from "@lichtblick/studio-base/context/NativeAppMenuContext";
import { INativeWindow } from "@lichtblick/studio-base/context/NativeWindowContext";
import { IDataSourceFactory } from "@lichtblick/studio-base/context/PlayerSelectionContext";
import { ExtensionLoader } from "@lichtblick/studio-base/services/ExtensionLoader";
import { createContext, useContext } from "react";

interface ISharedRootContext {
  deepLinks: readonly string[];
  appConfiguration?: IAppConfiguration;
  dataSources: IDataSourceFactory[];
  extensionLoaders: readonly ExtensionLoader[];
  nativeAppMenu?: INativeAppMenu;
  nativeWindow?: INativeWindow;
  enableLaunchPreferenceScreen?: boolean;
  enableGlobalCss?: boolean;
  appBarLeftInset?: number;
  extraProviders?: readonly JSX.Element[];
  customWindowControlProps?: CustomWindowControlsProps;
  onAppBarDoubleClick?: () => void;
  AppBarComponent?: (props: AppBarProps) => JSX.Element;
}

const SharedRootContext = createContext<ISharedRootContext>({
  deepLinks: [],
  dataSources: [],
  extensionLoaders: [],
});
SharedRootContext.displayName = "SharedRootContext";

export function useSharedRootContext(): ISharedRootContext {
  return useContext(SharedRootContext);
}

export { SharedRootContext };
export type { ISharedRootContext };
