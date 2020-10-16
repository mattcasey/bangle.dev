/**
 * @jest-environment jsdom
 */

/** @jsx psx */
import { psx, renderTestEditor } from 'bangle-core/test-helpers/index';

import {
  BulletList,
  Heading,
  Blockquote,
  CodeBlock,
  HardBreak,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Image,
} from 'bangle-core/nodes/index';
import { Underline } from 'bangle-core/marks';
import {
  getMarkdownSerializer,
  markdownSerializer,
} from '../markdown-serializer';
import {
  Bold,
  Code,
  HorizontalRule,
  Italic,
  Link,
  Strike,
} from 'bangle-core/index';
import { markdownParser } from '../markdown-parser';

const extensions = [
  new BulletList(),
  new ListItem(),
  new OrderedList(),
  new HardBreak(),
  new Heading(),
  new Underline(),
  new TodoList(),
  new TodoItem(),
  new Blockquote(),
  new CodeBlock(),
  new HorizontalRule(),
  new Image(),

  // marks
  new Link(),
  new Bold(),
  new Italic(),
  new Strike(),
  new Code(),
  new Underline(),
];

const schemaPromise = renderTestEditor({
  extensions,
})().then((r) => r.schema);

const { nodeSerializer, markSerializer } = getMarkdownSerializer(extensions);
export const serialize = async (doc) => {
  const content = doc(await schemaPromise);
  return markdownSerializer(nodeSerializer, markSerializer).serialize(content);
};

export const parse = async (md) =>
  markdownParser(await schemaPromise).parse(md);
