import { PrivateComponent } from "../private/privateComponent";
import { Permisisons } from "../redux/redux";

export const Hello = () => (
  <PrivateComponent
    permission={Permisisons.PERMISSION_HELLO}
  >
    <div>
      <PrivateComponent
        permission={Permisisons.PERMISSION_LOGIN}
      >
        <button>config</button>
      </PrivateComponent>
      <span>Hello</span>
    </div>
  </PrivateComponent>
)