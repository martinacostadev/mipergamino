import ProfilePage from "../components/ProfilePage";
import PageTitle from "../components/PageTitle";
import MainLayout from "~/components/MainLayout";
import { useContext } from "react";
import SessionContext from "~/src/session/context"

export default function Profile() {
  // usar useContext en vez de <Context.Consumer>
  const { state } = useContext(SessionContext)

  return (
    <MainLayout title="Perfil - MiPergamino">
      <PageTitle title="Perfil" />
      <ProfilePage user={state.user} />;
      {/* <Link href="/" className="flex float-right">
          <a>Volver</a>
        </Link> */}
    </MainLayout>
  );
}
