import AuthorCard from "../components/authorCard";

export default {
  title: "Components/Author Card",
  component: AuthorCard,
};

const Template = (args) => <AuthorCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Kris Kristofferson",
  bio: "Actor, Singer",
  image: {
    url: "https://picsum.photos/60/60",
    altText: "This is some alt text"
  }
};
