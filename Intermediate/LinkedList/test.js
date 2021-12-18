class​ ​LLNode​ ​{ 
 ​    ​constructor​(​value​)​ ​{ 
 ​        ​this​.​data​ ​=​ ​value​; 
 ​        ​this​.​next​ ​=​ ​null​; 
 ​    ​} 
 ​} 
  
 ​class​ ​LinkedList​ ​{ 
 ​    ​constructor​(​)​ ​{ 
 ​        ​this​.​head​ ​=​ ​null​; 
 ​        ​this​.​size​ ​=​ ​0​; 
 ​    ​} 
  
 ​    ​insert_node​(​pos​,​ ​no​)​ ​{ 
 ​        ​let​ ​newNode​ ​=​ ​new​ ​LLNode​(​no​)​; 
  
 ​        ​//  when pos is at start 
 ​        ​if​ ​(​Number​(​pos​)​ ​===​ ​1​)​ ​{ 
 ​            ​// when head is null 
 ​            ​if​ ​(​this​.​head​ ​===​ ​null​)​ ​{ 
 ​                ​this​.​head​ ​=​ ​newNode​; 
 ​                ​this​.​size​++​; 
 ​            ​}​ ​else​ ​{ 
 ​                ​newNode​.​next​ ​=​ ​this​.​head​; 
 ​                ​this​.​head​ ​=​ ​newNode​; 
 ​                ​this​.​size​++​; 
 ​            ​} 
 ​            ​return​; 
 ​        ​} 
  
 ​        ​//  when pos is in between or last 
 ​        ​if​ ​(​Number​(​pos​)​ ​>​ ​1​ ​&&​ ​Number​(​pos​)​ ​<=​ ​(​this​.​size​ ​+​ ​1​)​)​ ​{ 
 ​            ​let​ ​temp​ ​=​ ​this​.​head​; 
 ​            ​let​ ​currentNodePos​ ​=​ ​1​; 
 ​            ​while​ ​(​(​Number​(​pos​)​ ​-​ ​1​)​ ​>​ ​currentNodePos​)​ ​{ 
 ​                ​currentNodePos​++​; 
 ​                ​temp​ ​=​ ​temp​.​next​; 
 ​            ​} 
 ​            ​newNode​.​next​ ​=​ ​temp​.​next​; 
 ​            ​temp​.​next​ ​=​ ​newNode​; 
 ​            ​this​.​size​++​; 
 ​        ​} 
 ​    ​} 
  
 ​    ​delete_node​(​pos​)​ ​{ 
  
 ​        ​if​ ​(​Number​(​pos​)​ = ​1​ ​&&​ ​Number​(​pos​)​ ​<=​ ​(​this​.​size​)​)​ ​{ 
  
 ​            ​let​ ​temp​ ​=​ ​this​.​head​; 
 ​            ​// pos = Number(pos); 
  
 ​            ​// if node to delete is head node 
 ​            ​if​ ​(​Number​(​pos​)​ ​===​ ​1​)​ ​{ 
 ​                ​this​.​head​ ​=​ ​temp​.​next​; 
 ​                ​temp​.​next​ ​=​ ​null​; 
 ​                ​temp​ ​=​ ​null​; 
 ​                ​this​.​size​--​; 
 ​                ​return​; 
 ​            ​} 
  
 ​            ​// when node to delete is in between or last 
 ​            ​let​ ​currentNodePos​ ​=​ ​1​; 
 ​            ​while​ ​(​(​Number​(​pos​)​ ​-​ ​1​)​ ​>​ ​currentNodePos​)​ ​{ 
 ​                ​currentNodePos​++​; 
 ​                ​temp​ ​=​ ​temp​.​next​; 
 ​            ​} 
  
 ​            ​let​ ​nodeToDelete​ ​=​ ​temp​.​next​; 
 ​            ​temp​.​next​ ​=​ ​nodeToDelete​.​next​; 
 ​            ​nodeToDelete​.​next​ ​=​ ​null​; 
 ​            ​nodeToDelete​ ​=​ ​null​; 
 ​            ​this​.​size​--​; 
 ​        ​} 
  
 ​    ​} 
  
 ​    ​print_ll​(​)​ ​{ 
 ​        ​let​ ​nodeList​ ​=​ ​[​]​; 
 ​        ​let​ ​temp​ ​=​ ​this​.​head​; 
 ​        ​while​ ​(​temp​ ​!==​ ​null​)​ ​{ 
 ​            ​nodeList​.​push​(​temp​.​data​)​; 
 ​            ​temp​ ​=​ ​temp​.​next​; 
 ​        ​} 
 ​        ​console​.​log​(​nodeList​.​join​(​' '​)​)​; 
 ​    ​} 
 ​}
