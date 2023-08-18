import PageLayout from "src/components/layout/PageLayout";
import Table from "src/components/ui/Table";
import UserColumnDef from "src/components/user/UserColumnDef";
import useList from "src/hooks/useList";
import UserService from "src/services/user.service";

export default function UserList() {
  const columnDef = UserColumnDef();
  const { data, setFilter } = useList({
    listKey: "users",
    columnDef,
    getListFn: UserService.getUsers,
  });

  return (
    <PageLayout
      title="Usuarios"
      onSearchChange={setFilter}
    >
      <Table
        rows={data ?? []}
        columns={columnDef}
      />
    </PageLayout>
  );
}
