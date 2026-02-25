import styled from 'styled-components';

export default function Stage2() {
  return (
    <Container>
      <LockIcon>🔒</LockIcon>
      <Message>아직 공개되지 않았습니다</Message>
      <SubMessage>다음 차시에 공개됩니다. 기대해주세요!</SubMessage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
`;

const LockIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const Message = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 8px;
`;

const SubMessage = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.9rem;
`;
