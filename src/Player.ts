export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    // if we have a pair, all in
    if (gameState.players[gameState.in_action].hole_cards[0].rank === gameState.players[gameState.in_action].hole_cards[1].rank) {
      betCallback(100);
    } else {
      // if we have ace, queen or king. bet 100
      betCallback(0);
    }

  }

  public showdown(gameState: any): void {

  }
};

export default Player;
