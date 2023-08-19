import { useQuery, useQueryClient } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import CheckboxMenuItem from "src/components/ui/CheckboxMenuItem";
import CollapsibleMenuItem from "src/components/ui/CollapsibleMenuItem";
import { CATEGORY_QUERY_KEY } from "src/constants";
import { Category } from "src/interfaces/category";
import CategoryService from "src/services/category.service";

type FilterMenuListProps = { text: string };

function FilterMenuList({ text }: FilterMenuListProps) {
  const queryClient = useQueryClient();
  const { data: categories } = useQuery<Category[]>({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: CategoryService.getAllList,
  });
  useEffect(
    () => () => {
      queryClient.cancelQueries([CATEGORY_QUERY_KEY]);
    },
    [],
  );
  return (
    <CollapsibleMenuItem text={text}>
      <CollapsibleMenuItem text="Category" isNested>
        {categories?.map((o) => (
          <CheckboxMenuItem
            key={o.id}
            text={o.name}
            onChange={() => null}
          />
        ))}
      </CollapsibleMenuItem>
    </CollapsibleMenuItem>
  );
}

const ProductFilterMenuList = memo(FilterMenuList);

export default ProductFilterMenuList;
