import {builder} from "~/app/pothos/builder";
import path from "path";

const main = ()=>{
  const schemaBuilder = builder
  schemaBuilder.options.pothosSchemaExporter = {
    output:path.join(process.cwd(), "graphql", "schema.graphql"),
  }
  schemaBuilder.toSchema()
}

main()