
import show from "./show.animal";
import create from "./create.animal";
import edit from "./edit.animal";
import list from "./list.animal";

export default { 
  name: "animal",
  label: "animal",
  hide: false,
  create,
  edit,
  list,
  show,
}