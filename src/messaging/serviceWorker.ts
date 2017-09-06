/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import firebase from '../app';
import SWController from './controllers/sw-controller';

export function registerMessaging(instance) {
  const messagingName = 'messaging';
  const factoryMethod = app => {
    // Patch the controller implementation into this file
    return new SWController(app);
  };

  const namespaceExports = {
    // no-inline
    Messaging: SWController
  };

  instance.INTERNAL.registerService(
    messagingName,
    factoryMethod,
    namespaceExports
  );
}

registerMessaging(firebase);
