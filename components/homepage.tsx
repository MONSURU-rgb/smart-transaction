import { useIntl } from "react-intl";

import { Layout } from "./common/layout";
import { MainContent } from "./main";

export function Homepage() {
  const intl = useIntl();

  return <Layout>{<MainContent />}</Layout>;
}

{
  /* <h1>
        <FormattedMessage
          id="page.home.title"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h1>

      <p className="text-green-600">
        <FormattedMessage id="page.home.description" />
      </p>

      <h4>
        {" "}
        <FormattedMessage id="page.home.description" />
      </h4> */
}
