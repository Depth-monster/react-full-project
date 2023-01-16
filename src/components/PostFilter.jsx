import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })///важные вещи при onChange input есть e.target.value
        }
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })///важные вещи при select onChange нет e.target.value
        }
        defaultValue="Sort by"
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
