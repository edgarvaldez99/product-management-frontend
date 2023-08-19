import PageLayout from "src/components/layout/PageLayout";
import ProductColumnDef from "src/components/product/ProductColumnDef";
import UnregisteredProductColumnDef from "src/components/product/UnregisteredProductColumnDef";
import Table from "src/components/ui/Table";
import { PRODUCT_QUERY_KEY } from "src/constants";
import { useAuthUserContext } from "src/hooks/contexts";
import useList from "src/hooks/useList";
import ProductService from "src/services/product.service";

export default function ProductList() {
  const { user } = useAuthUserContext();
  const isLogged = !!user;
  const columnDef = isLogged
    ? ProductColumnDef()
    : UnregisteredProductColumnDef();
  const getListFn = isLogged
    ? ProductService.getList
    : ProductService.getUnregisteredList;
  const { data, setFilter } = useList({
    listKey: PRODUCT_QUERY_KEY,
    columnDef,
    getListFn,
  });

  return (
    <PageLayout title="products" onSearchChange={setFilter}>
      <Table rows={data ?? []} columns={columnDef} />
    </PageLayout>
  );
}
