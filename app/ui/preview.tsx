import { ArticleType } from "@/app/lib/definitions";
import { Card, Text, Group } from "@mantine/core";
import classes from "./preview.module.css";

export default function Preview({ article }: { article: ArticleType }) {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            {article.headline.main}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">{article.byline.original}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              {article.pub_date}
            </Text>
            <Text size="xs">{article.snippet}</Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
