import AuthorCard from "../components/authorCard";

export default {
  title: "Components/Author Card",
  component: AuthorCard,
};

const Template = (args) => <AuthorCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Andy Rossi"
};