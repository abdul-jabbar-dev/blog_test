import { Link } from "react-router-dom";

export default function Blog({ item }: { item: Record<string, never> }) {
  return (
    <div>
      <h3>
        <Link to={"/blogs/" + item.id}>{item.title}</Link>
      </h3>
    </div>
  );
}
