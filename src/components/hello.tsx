import { PrivateComponent } from "../private/privateComponent";
import { Permissions } from "../redux/redux";

export const Hello = () => (
  <PrivateComponent
    permission={Permissions.PERMISSION_HELLO}
  >
    <span>Hello</span> 
  </PrivateComponent>
)