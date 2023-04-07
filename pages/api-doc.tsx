import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import Style from '../styles/api-doc.module.css';
const SwaggerUI = dynamic<{
  spec: any;
}>(import('swagger-ui-react'), { ssr: false });

// const SwaggerUI = dynamic<{
//   spec: any;
// }>(import('../styles/api-doc.module.css'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {

  return <SwaggerUI 
  
  // url="https://petstore3.swagger.io/api/v3/openapi.json"
  // docExpansion={"full"}
  spec={spec} 
  // color={"#FFFFFF"}
  />;

}

export const getStaticProps: GetStaticProps = async () => {

  const spec: Record<string, any> = createSwaggerSpec({

    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API',
        version: '1.0',
        // color:"#FFFFFF",
      },
      // color:"#FFFFFF",
    },
    // color:"#FFFFFF",

  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;