
import { FC } from 'react';
import { Helmet } from 'react-helmet';


interface SeoProps{
  title:string,
  description:string,
  keywords?:string
  image?:string

}




const Seo: FC<SeoProps> = ({ title, description, keywords,image }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <title>{`${title} || Delve`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords&&keywords} />
        <meta name="image" content={image&&image}/>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image&&image}/>
      </Helmet>
    </div>
  );
};

export default Seo;
