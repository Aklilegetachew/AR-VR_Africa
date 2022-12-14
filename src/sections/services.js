/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";

import individual from "assets/images/icons/individual.png";
import team from "assets/images/icons/team.png";
import org from "assets/images/icons/org.png";

const data = [
  {
    id: 1,
    icon: individual,
    title: "Free Package",
    description: `test the demo and learn basic languages.`,
  },
  {
    id: 2,
    icon: team,
    title: "Team Subscription \n Starting from 999.00 ETB",
    description: `create your own class in a group to study 2 languages.`,
  },
  {
    id: 3,
    icon: org,
    title: "For Organization \n Starting from 3999.00 ETB ",
    description: `Get your team the best of the best for your organization and improve it. .`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Successful study start with great feature"
          description="Language learning has become easier than ever."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ["none", null, null, 565, null, "none"],
    h2: {
      color: "heading",
      fontSize: ["28px", "32px", "32px", "32px", "32px", "32px", "40px"],
    },
    P: {
      fontSize: ["16px", "16px", "16px", "16px", "14px", "16px"],
      maxWidth: [510],
      m: ["5px auto 0"],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    ".feature-item": {
      display: ["block", "block", "flex", "flex", "block", "flex"],
      textAlign: ["center", "center", "left", "left", "center", "left"],
      maxWidth: [290, 260, "none"],
      m: ["0 auto", "0 auto", 0],
      figure: {
        m: [
          "0 0 15px",
          "0 0 15px",
          "0 30px 0 0",
          "0 30px 0 0",
          "0 0 15px",
          "0 30px 0 0",
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ["15px", "15px", "20px", "15px"],
      },
      p: {
        fontSize: ["14px", "14px", "16px", "16px", "14px", "16px"],
      },
    },
  },
};
