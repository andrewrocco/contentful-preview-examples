import AuthorCard from "../components/authorCard";
import { getImageById } from "../lib/api";
import { useArgs } from '@storybook/client-api';

export default {
  title: "Components/Author Card",
  component: AuthorCard
};

let customArgs = null;

const Template = (args) => {
  if (args.imageId) {
    getImageById(args.imageId).then((resp) => {
      return updateArgs({
        ...args,
        image: {
          url: resp.data.asset.url,
          description: resp.data.asset.description
        }},);
    });
  }

  // update args after an attempted remote image load
  const [_, updateArgs] = useArgs();

  return <AuthorCard {...args} />
};

export const Primary = Template.bind({});

Primary.args = {
  name: "Kris Kristofferson",
  bio: "Actor & Musician",
  imageId: "", // set to be overwritten by args value
  image: {
    url: "https://picsum.photos/60/60",
    description: "This is some alt text",
  },
};
