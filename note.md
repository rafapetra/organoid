-m" 


Co-authored-by: Jonathan Liera <jonliera1@gmail.com>
Co-authored-by: Bai  Jaitrong <bd2jaitrong@gmail.com>
Co-authored-by: Hans Ellis <bullhorn@gmail.com>"


player
enemy
grid


### Broad Game Mechanics
1. Character creation. Enter name. Choose class. Click "Start Game."
 * In code: player1 = classTheyChose; Pass in name.
2. Game page. Flavor text/story. Presented with two doors and a shiny object. Player chooses.
* If door: Generate new room. If shiny thing: generate or present item that boosts stats. Apply changeState();. If they choose object they then must choose door.
3. Combat encounter. Run const robot1 = smallRobotEnemy;
* Do combat. Pseudo RNG. Robot must hit character 20 times. Player must hit robot 2 times. On screen messages.