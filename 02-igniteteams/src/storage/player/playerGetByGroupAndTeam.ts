import { playersGetByGroup_AS } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam_AS(group: string, team: string) {
  try {
    const storage = await playersGetByGroup_AS(group);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
