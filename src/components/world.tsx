import { PrivateComponent } from "../private/privateComponent";
import { Permisisons } from "../redux/redux";

export const World = () => (
  <PrivateComponent
    permission={Permisisons.PERMISSION_WORLD}
  >
    <span>world</span>
  </PrivateComponent>
)