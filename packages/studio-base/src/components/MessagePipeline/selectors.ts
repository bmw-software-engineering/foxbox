// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import * as _ from "lodash-es";

import { MessagePipelineContext } from "@foxglove/studio-base/components/MessagePipeline/types";

export const getTopicToSchemaNameMap = (
  state: MessagePipelineContext,
): Record<string, string | undefined> =>
  _.mapValues(_.keyBy(state.sortedTopics, "name"), ({ schemaName }) => schemaName);
