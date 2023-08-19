import PageLayout from "src/components/layout/PageLayout";
import Table from "src/components/ui/Table";
import UserColumnDef from "src/components/user/UserColumnDef";
import { USER_QUERY_KEY } from "src/constants";
import useList from "src/hooks/useList";
import UserService from "src/services/user.service";

export default function UserList() {
  const columnDef = UserColumnDef();
  const { data } = useList({
    listKey: USER_QUERY_KEY,
    getListFn: UserService.getUsers,
  });

  return (
    <PageLayout title="Usuarios">
      <Table rows={data ?? []} columns={columnDef} />
    </PageLayout>
  );
}
