import { PrivateComponent } from "../private/privateComponent";
import { Permissions } from "../redux/redux";

export const World = () => (
  <PrivateComponent
    permission={Permissions.PERMISSION_WORLD}
  >
    <span>world</span>
  </PrivateComponent>
)