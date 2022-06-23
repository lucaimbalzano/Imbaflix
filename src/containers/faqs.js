import React from 'react';
import { Accordion, TryNow } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <TryNow>
        <TryNow.Input placeholder="Email address" />
        <TryNow.Button>Try it now</TryNow.Button>
        <TryNow.Break />
        <TryNow.Text>Ready to watch? Enter your email to create or restart your membership.</TryNow.Text>
      </TryNow>
    </Accordion>
  );
}
